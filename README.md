# Starter für das LF10 Projekt

## Requirements

* Docker https://docs.docker.com/get-docker/
* Docker compose (bei Windows und Mac schon in Docker enthalten) https://docs.docker.com/compose/install/

### Abhängigkeiten starten (Postgres, EmployeeBackend, Authentik)

```bash
docker compose up
```

Achtung: Der Docker-Container läuft dauerhaft! Wenn er nicht mehr benötigt wird, solltest du ihn stoppen.

### Abhängigkeiten stoppen

```bash
docker compose down
```

### Postgres Datenbank wipen, z.B. bei Problemen

```bash
docker compose down
docker volume rm docker_employee_postgres_data
docker compose up
```

## Swagger des Backends

```
http://localhost:8089/swagger
```

# Postgres

```

### Intellij-Ansicht für Postgres Datenbank einrichten

```bash
1. Lasse den Docker-Container mit den Abhängigkeiten laufen
2. rechts im Fenster den Reiter Database öffnen
3. In der Database-Symbolleiste auf das Datenbanksymbol mit dem Schlüssel klicken
4. auf das Pluszeichen klicken
5. Datasource from URL auswählen
6. URL der DB einfügen (jdbc:postgresql://localhost:5432/employee_db) und PostgreSQL-Treiber auswählen, mit OK bestätigen
7. Username lf10_starter und Passwort secret eintragen (siehe application.properties), mit Apply bestätigen
8. im Reiter Schemas alle Häkchen entfernen und lediglich vor lf10_starter_db und public Häkchen setzen
9. mit Apply und ok bestätigen 
```


