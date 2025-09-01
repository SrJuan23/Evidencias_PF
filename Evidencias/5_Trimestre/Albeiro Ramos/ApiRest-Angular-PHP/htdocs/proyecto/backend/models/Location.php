<?php
class Location {
    private $conn;

    public function __construct() {
        $this->conn = DbConn::connection();
    }

    // Obtener todas las viviendas
    public function getAllHousingLocations() {
        $stmt = $this->conn->query("SELECT * FROM locations");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtener vivienda por ID
    public function getHousingLocationById($id) {
        $stmt = $this->conn->prepare("SELECT * FROM locations WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Crear nueva vivienda
    public function createHousingLocation($name, $city, $state, $photo, $availableUnits, $wifi, $laundry) {
        $stmt = $this->conn->prepare("
            INSERT INTO locations (name, city, state, photo, availableUnits, wifi, laundry)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ");

        if ($stmt->execute([$name, $city, $state, $photo, $availableUnits, $wifi, $laundry])) {
            $id = $this->conn->lastInsertId();
            return $this->getHousingLocationById($id); // 🔥 Devuelve la vivienda recién creada
        }
        return false;
    }

    // Actualizar vivienda existente
    public function updateHousingLocation($id, $name, $city, $state, $photo, $availableUnits, $wifi, $laundry) {
        $stmt = $this->conn->prepare("
            UPDATE locations 
            SET name = ?, city = ?, state = ?, photo = ?, availableUnits = ?, wifi = ?, laundry = ?
            WHERE id = ?
        ");

        if ($stmt->execute([$name, $city, $state, $photo, $availableUnits, $wifi, $laundry, $id])) {
            return $this->getHousingLocationById($id); // 🔥 Devuelve la vivienda actualizada
        }
        return false;
    }

    // Eliminar vivienda
    public function deleteHousingLocation($id) {
        $stmt = $this->conn->prepare("DELETE FROM locations WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
?>
