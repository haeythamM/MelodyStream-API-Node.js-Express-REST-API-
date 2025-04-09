-- Sales Managers Table
CREATE TABLE IF NOT EXISTS sales_managers (
    sales_manager_id INT AUTO_INCREMENT PRIMARY KEY,
    manager_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(15),
    sales_notes TEXT
);

-- Instruments Table
CREATE TABLE IF NOT EXISTS instruments (
    instrument_id INT AUTO_INCREMENT PRIMARY KEY,
    instrument_name VARCHAR(255) UNIQUE NOT NULL
);

-- Albums Table
CREATE TABLE IF NOT EXISTS albums (
    album_id INT AUTO_INCREMENT PRIMARY KEY,
    album_name VARCHAR(255) NOT NULL,
    production_year INT NOT NULL CHECK (production_year BETWEEN 1900 AND 2100),
    production_country VARCHAR(255) NOT NULL,
    sales_manager_id INT NULL,
    FOREIGN KEY (sales_manager_id) 
        REFERENCES sales_managers(sales_manager_id) ON DELETE SET NULL
);

-- Songs Table
CREATE TABLE IF NOT EXISTS songs (
    song_id INT AUTO_INCREMENT PRIMARY KEY,
    song_name VARCHAR(255) NOT NULL,
    album_id INT NOT NULL,
    duration INT NOT NULL,
    FOREIGN KEY (album_id) 
        REFERENCES albums(album_id) ON DELETE CASCADE
);

-- Singers Table
CREATE TABLE IF NOT EXISTS singers (
    singer_id INT AUTO_INCREMENT PRIMARY KEY,
    singer_name VARCHAR(255) NOT NULL,
    country VARCHAR(255),
    birth_year INT CHECK (birth_year BETWEEN 1900 AND 2100)
);

-- Instrumentalists Table
CREATE TABLE IF NOT EXISTS instrumentalists (
    instrumentalist_id INT AUTO_INCREMENT PRIMARY KEY,
    instrumentalist_name VARCHAR(255) NOT NULL,
    instrument_id INT NOT NULL,
    country VARCHAR(255),
    sales_manager_id INT NULL,
    FOREIGN KEY (sales_manager_id) 
        REFERENCES sales_managers(sales_manager_id) ON DELETE SET NULL,
    FOREIGN KEY (instrument_id) 
        REFERENCES instruments(instrument_id)
);

-- Song-Singers Junction Table
CREATE TABLE IF NOT EXISTS song_singers (
    song_id INT,
    singer_id INT,
    PRIMARY KEY (song_id, singer_id),
    FOREIGN KEY (song_id) 
        REFERENCES songs(song_id) ON DELETE CASCADE,
    FOREIGN KEY (singer_id) 
        REFERENCES singers(singer_id) ON DELETE CASCADE
);

CREATE INDEX idx_album_sales_manager ON albums(sales_manager_id);
CREATE INDEX idx_song_singer ON song_singers(song_id, singer_id);