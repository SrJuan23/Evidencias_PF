
CREATE DATABASE IF NOT EXISTS MatriculaUniversitaria;
USE MatriculaUniversitaria;


CREATE TABLE Estudiante (
    ID_Estudiante INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    FechaNacimiento DATE,
    Genero ENUM('M','F','Otro'),
    Programa VARCHAR(100)
);


CREATE TABLE Asignatura (
    ID_Asignatura INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100),
    Creditos INT
);


CREATE TABLE Matricula (
    ID_Matricula INT AUTO_INCREMENT PRIMARY KEY,
    ID_Estudiante INT,
    ID_Asignatura INT,
    Año INT,
    Semestre ENUM('1','2'),
    Estado ENUM('pendiente', 'confirmada', 'cancelada'),
    Fecha_Matricula DATE,
    Fecha_Límite_Pago DATE,
    FOREIGN KEY (ID_Estudiante) REFERENCES Estudiante(ID_Estudiante),
    FOREIGN KEY (ID_Asignatura) REFERENCES Asignatura(ID_Asignatura)
);


INSERT INTO Estudiante (Nombre, Apellido, FechaNacimiento, Genero, Programa) VALUES
('Carlos', 'Pérez', '2000-01-12', 'M', 'Ingeniería'),
('Luisa', 'Gómez', '1998-05-22', 'F', 'Medicina'),
('Ana', 'Ruiz', '2002-11-03', 'F', 'Derecho'),
('José', 'Martínez', '1997-06-18', 'M', 'Economía'),
('Sofía', 'López', '2001-02-27', 'F', 'Psicología'),
('Pedro', 'Ramos', '1999-08-14', 'M', 'Ingeniería'),
('Laura', 'Morales', '2003-03-29', 'F', 'Arquitectura'),
('Diego', 'Fernández', '1996-09-10', 'M', 'Medicina'),
('María', 'Ortiz', '2000-12-25', 'F', 'Derecho'),
('Andrés', 'Vega', '2002-04-30', 'M', 'Psicología');


INSERT INTO Asignatura (Nombre, Creditos) VALUES
('Matemáticas I', 3),
('Biología General', 4),
('Derecho Civil', 3),
('Macroeconomía', 3),
('Psicología Social', 4),
('Física I', 4),
('Diseño Arquitectónico', 5),
('Anatomía', 4),
('Ética Profesional', 2),
('Historia Universal', 3);


INSERT INTO Matricula (ID_Estudiante, ID_Asignatura, Año, Semestre, Estado, Fecha_Matricula, Fecha_Límite_Pago) VALUES
(1, 1, 2024, '1', 'confirmada', '2024-01-10', '2024-02-15'),
(2, 2, 2024, '1', 'pendiente', '2024-01-12', '2024-02-15'),
(3, 3, 2023, '2', 'cancelada', '2023-08-05', '2023-09-10'),
(4, 4, 2024, '1', 'confirmada', '2024-01-15', '2024-02-15'),
(5, 5, 2023, '2', 'confirmada', '2023-08-03', '2023-09-05'),
(6, 6, 2024, '1', 'pendiente', '2024-01-20', '2024-02-15'),
(7, 7, 2023, '2', 'confirmada', '2023-08-12', '2023-09-10'),
(8, 8, 2024, '1', 'confirmada', '2024-01-18', '2024-02-15'),
(9, 9, 2023, '2', 'pendiente', '2023-08-01', '2023-09-01'),
(10, 10, 2024, '1', 'cancelada', '2024-01-25', '2024-02-20');


SELECT COUNT(*) AS TotalEstudiantes FROM Estudiante;

SELECT Programa, COUNT(*) AS Total FROM Estudiante GROUP BY Programa;

SELECT Genero, COUNT(*) AS Total FROM Estudiante GROUP BY Genero;

SELECT Estado, COUNT(*) AS Total FROM Matricula GROUP BY Estado;

SELECT Año, Semestre, COUNT(*) AS Total FROM Matricula GROUP BY Año, Semestre;

SELECT ROUND(AVG(YEAR(CURDATE()) - YEAR(FechaNacimiento))) AS EdadPromedio FROM Estudiante;

SELECT Año, COUNT(*) AS Total FROM Matricula GROUP BY Año;

SELECT Semestre, COUNT(*) AS Total FROM Matricula GROUP BY Semestre;

SELECT COUNT(*) AS TotalAsignaturas FROM Asignatura WHERE Creditos > 3;

SELECT Programa, COUNT(*) AS Total 
FROM Estudiante 
WHERE YEAR(FechaNacimiento) < 2000 
GROUP BY Programa;

SELECT MAX(Creditos) AS Maximo, MIN(Creditos) AS Minimo, AVG(Creditos) AS Promedio FROM Asignatura;

SELECT YEAR(FechaNacimiento) AS AñoNacimiento, COUNT(*) AS Total 
FROM Estudiante 
GROUP BY AñoNacimiento 
ORDER BY AñoNacimiento;


SELECT CONCAT(Nombre, ' ', Apellido) AS NombreCompleto FROM Estudiante;


SELECT E.Nombre, E.Apellido, M.Estado
FROM Estudiante E
JOIN Matricula M ON E.ID_Estudiante = M.ID_Estudiante
WHERE M.Estado = 'pendiente';


SELECT COUNT(*) AS Total FROM Matricula WHERE Año = 2024;

SELECT Nombre FROM Asignatura WHERE Creditos < 4;

SELECT Nombre, Creditos
FROM Asignatura
ORDER BY Creditos DESC;

SELECT COUNT(*) AS Total FROM Estudiante WHERE YEAR(FechaNacimiento) = 2000;

SELECT Nombre, Creditos, 
       Creditos * 5 * 47450 AS ValorMonetario
FROM Asignatura;


SELECT Nombre, Apellido, 
       YEAR(CURDATE()) - YEAR(FechaNacimiento) AS Edad
FROM Estudiante
WHERE YEAR(CURDATE()) - YEAR(FechaNacimiento) > 25;


SELECT CONCAT(FLOOR(YEAR(FechaNacimiento)/10)*10, 's') AS Decada, COUNT(*) AS Total
FROM Estudiante
GROUP BY Decada
ORDER BY Decada;








 



