# Verizon-Inspired Landing Page

A responsive educational landing page built with Python and Flask.

This project is not affiliated with Verizon. It recreates a similar visual
style rather than reproducing the live website exactly.

## Technologies

- Python
- Flask
- HTML
- CSS
- JavaScript

## Features

- Responsive landing page
- Mobile navigation
- CSS phone and router illustrations
- Service and product sections
- Links to the official Verizon website

## Run locally on Windows

Create a virtual environment:

```powershell
py -m venv .venv
```

Install dependencies:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

Start the development server:

```powershell
.\.venv\Scripts\python.exe app.py
```

Open http://127.0.0.1:5000 in your browser.

## Project files

- `app.py`: Flask application
- `requirements.txt`: Python dependencies
- `templates/index.html`: Landing page structure
- `static/css/style.css`: Styling and responsive layouts
- `static/js/main.js`: Mobile navigation
- `.gitignore`: Files excluded from version control

## Notes

The development server is intended for local use.
GitHub stores the source code; pushing this repository does not deploy
the Flask application.

## Project Demo

[Watch the screen recording](demo/screen-recording.mp4)