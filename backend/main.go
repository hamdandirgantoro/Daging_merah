package main

import (
	"database/sql"
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"strings"

	_ "github.com/go-sql-driver/mysql"
	"github.com/rs/cors"
	_ "github.com/rs/cors"
)

var db *sql.DB

func initDB() {
	var err error
	db, err = sql.Open("mysql", "root:password@tcp(localhost:3306)/daging_merah")
	if err != nil {
		log.Fatal(err)
	}
}

func getAllLamaran(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT * FROM surat_lamaran") // Replace "yourtable" with the name of your database table
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var data []map[string]interface{} // Use a map to represent each row as JSON objects

	for rows.Next() {
		columns, err := rows.Columns()
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		values := make([]interface{}, len(columns))
		scanArgs := make([]interface{}, len(columns))

		for i := range values {
			scanArgs[i] = &values[i]
		}

		if err := rows.Scan(scanArgs...); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		entry := make(map[string]interface{})
		for i, col := range columns {
			var value interface{}
			val := values[i]
			switch v := val.(type) {
			case nil:
				value = nil
			case []byte:
				value = string(val.([]byte))
			default:
				value = v
			}
			entry[col] = value
		}

		data = append(data, entry)
	}

	// Convert the data to JSON
	jsonData, err := json.Marshal(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to indicate JSON response
	w.Header().Set("Content-Type", "application/json")

	// Send the JSON response to the client
	w.Write(jsonData)
}

func getOneLamaran(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Tidak Diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	parts := strings.Split(r.URL.Path, "/")
	if len(parts) != 4 {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(parts[3])
	if err != nil {
		http.Error(w, "Invalid item ID", http.StatusBadRequest)
		return
	}

	row := db.QueryRow("SELECT id, nama, email, deskripsi FROM surat_lamaran WHERE id = ?", id)

	type Lamaran struct {
		ID          int    `json:"id"`
		Pelamar     string `json:"nama"`
		Pesan       string `json:"email"`
		Attachments string `json:"deskripsi"`
	}

	var l Lamaran
	err = row.Scan(&l.ID, &l.Pelamar, &l.Pesan, &l.Attachments)

	if err == sql.ErrNoRows {
		http.Error(w, "Item not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jsonData, err := json.Marshal(l)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to indicate JSON response
	w.Header().Set("Content-Type", "application/json")

	// Send the JSON response to the client
	w.Write(jsonData)
}

func createLamaran(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Tidak Diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	contentType := r.Header.Get("Content-Type")

	switch contentType {
	case "application/json":
		var data struct {
			Nama      string `json:"nama"`
			Email     string `json:"email"`
			Deskripsi string `json:"deskripsi"`
		}
		decoder := json.NewDecoder(r.Body)
		if err := decoder.Decode(&data); err != nil {
			http.Error(w, "Invalid Json Data", http.StatusBadRequest)
			return
		}
		defer r.Body.Close()

		_, err := db.Exec("INSERT INTO surat_lamaran (nama, email, deskripsi, created_at) VALUES (?, ?, ?, NOW())", data.Nama, data.Email, data.Deskripsi)
		if err != nil {
			type AppError struct {
				Message string `json:"message"`
			}
			errMsg := "Error inserting data into the database: " + err.Error()
			appErr := AppError{Message: errMsg}
			jsonResponse, _ := json.Marshal(appErr)
			http.Error(w, string(jsonResponse), http.StatusInternalServerError)
			return
		}
		// Create a JSON response
		response := struct {
			Message string `json:"message"`
		}{
			Message: "Data Berhasil Ditambahkan",
		}

		// Convert the response to JSON and write it to the response writer
		jsonResponse, _ := json.Marshal(response)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		w.Write(jsonResponse)

	case "application/x-www-form-urlencoded":
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Error Parsing Form Data", http.StatusBadRequest)
			return
		}

	default:
		http.Error(w, "Unsupported Content-Type", http.StatusUnsupportedMediaType)
		return
	}
}

func deleteLamaran(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method tidak diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	parts := strings.Split(r.URL.Path, "/")
	if len(parts) != 4 {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(parts[3])
	if err != nil {
		http.Error(w, "Invalid item ID", http.StatusBadRequest)
		return
	}

	_, err = db.Exec("DELETE FROM surat_lamaran WHERE id = ?", id)
	if err != nil {
		http.Error(w, "Error deleting item", http.StatusInternalServerError)
		return
	}
}

func getAllFeedback(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT * FROM feedback") // Replace "yourtable" with the name of your database table
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	var data []map[string]interface{} // Use a map to represent each row as JSON objects

	for rows.Next() {
		columns, err := rows.Columns()
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		values := make([]interface{}, len(columns))
		scanArgs := make([]interface{}, len(columns))

		for i := range values {
			scanArgs[i] = &values[i]
		}

		if err := rows.Scan(scanArgs...); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		entry := make(map[string]interface{})
		for i, col := range columns {
			var value interface{}
			val := values[i]
			switch v := val.(type) {
			case nil:
				value = nil
			case []byte:
				value = string(val.([]byte))
			default:
				value = v
			}
			entry[col] = value
		}

		data = append(data, entry)
	}

	// Convert the data to JSON
	jsonData, err := json.Marshal(data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to indicate JSON response
	w.Header().Set("Content-Type", "application/json")

	// Send the JSON response to the client
	w.Write(jsonData)
}

func getOneFeedback(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method Tidak Diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	parts := strings.Split(r.URL.Path, "/")
	if len(parts) != 4 {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(parts[3])
	if err != nil {
		http.Error(w, "Invalid item ID", http.StatusBadRequest)
		return
	}

	row := db.QueryRow("SELECT id, nama, email, judul, pesan FROM feedback WHERE id = ?", id)

	type Feedback struct {
		ID    int    `json:"id"`
		Nama  string `json:"nama"`
		Email string `json:"email"`
		Judul string `json:"judul"`
		Pesan string `json:"pesan"`
	}

	var Data Feedback
	err = row.Scan(&Data.ID, &Data.Nama, &Data.Email, &Data.Judul, &Data.Pesan)

	if err == sql.ErrNoRows {
		http.Error(w, "Item not found", http.StatusNotFound)
		return
	} else if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	jsonData, err := json.Marshal(Data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Set the Content-Type header to indicate JSON response
	w.Header().Set("Content-Type", "application/json")

	// Send the JSON response to the client
	w.Write(jsonData)
}

func createFeedback(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method Tidak Diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	contentType := r.Header.Get("Content-Type")

	switch contentType {
	case "application/json":
		var data struct {
			Nama  string `json:"nama"`
			Email string `json:"email"`
			Judul string `json:"judul"`
			Pesan string `json:"pesan"`
		}
		decoder := json.NewDecoder(r.Body)
		if err := decoder.Decode(&data); err != nil {
			http.Error(w, "Invalid Json Data", http.StatusBadRequest)
			return
		}
		defer r.Body.Close()

		_, err := db.Exec("INSERT INTO feedback (nama, email, judul, pesan, created_at) VALUES (?, ?, ?, ?, NOW())", data.Nama, data.Email, data.Judul, data.Pesan)
		if err != nil {
			type AppError struct {
				Message string `json:"message"`
			}
			errMsg := "Error inserting data into the database: " + err.Error()
			appErr := AppError{Message: errMsg}
			jsonResponse, _ := json.Marshal(appErr)
			http.Error(w, string(jsonResponse), http.StatusInternalServerError)
			return
		}
		// Create a JSON response
		response := struct {
			Message string `json:"message"`
		}{
			Message: "Data Berhasil Ditambahkan",
		}

		// Convert the response to JSON and write it to the response writer
		jsonResponse, _ := json.Marshal(response)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		w.Write(jsonResponse)

	case "application/x-www-form-urlencoded":
		if err := r.ParseForm(); err != nil {
			http.Error(w, "Error Parsing Form Data", http.StatusBadRequest)
			return
		}

	default:
		http.Error(w, "Unsupported Content-Type", http.StatusUnsupportedMediaType)
		return
	}
}

func deleteFeedback(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodDelete {
		http.Error(w, "method tidak diperbolehkan", http.StatusMethodNotAllowed)
		return
	}

	parts := strings.Split(r.URL.Path, "/")
	if len(parts) != 4 {
		http.Error(w, "Invalid URL", http.StatusBadRequest)
		return
	}

	id, err := strconv.Atoi(parts[3])
	if err != nil {
		http.Error(w, "Invalid item ID", http.StatusBadRequest)
		return
	}

	_, err = db.Exec("DELETE FROM feedback WHERE id = ?", id)
	if err != nil {
		http.Error(w, "Error deleting item", http.StatusInternalServerError)
		return
	}
}

func main() {
	// connect DB
	initDB()
	router := http.NewServeMux()
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, // Replace with your frontend URL
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"*"},
		Debug:          true, // Set to false in production
	})
	handler := c.Handler(router)

	// routes
	router.HandleFunc("/surats", getAllLamaran)
	router.HandleFunc("/surat/show/", getOneLamaran)
	router.HandleFunc("/surat/create", createLamaran)
	router.HandleFunc("/surat/delete/", deleteLamaran)
	router.HandleFunc("/feedbacks", getAllFeedback)
	router.HandleFunc("/feedback/show/", getOneFeedback)
	router.HandleFunc("/feedback/create", createFeedback)
	router.HandleFunc("/feedback/delete/", deleteFeedback)

	// run server
	log.Println("Server Berjalan Pada http://localhost:8000")
	log.Fatal(http.ListenAndServe(":8000", handler))
}
