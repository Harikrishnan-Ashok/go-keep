# Use official Go image
FROM golang:1.24

# Create working directory inside the container
WORKDIR /app

# Copy dependency files and download them
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of your source code into the container
COPY . .

# Build the app
RUN go build -o main .

# Expose the port your app will run on
EXPOSE 8080

# Command to run the app
CMD ["./main"]
