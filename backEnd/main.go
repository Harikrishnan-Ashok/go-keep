package main

import (
  "net/http"
  "github.com/gin-gonic/gin"
  "github.com/gin-contrib/cors"
)

func main() {
  r := gin.Default()
  r.Use(cors.Default())

	r.POST("/login", func(c *gin.Context) {
  	  var requestBody struct {
    	    user_name    string `json:"user_name"`
      	  user_password string `json:"user_password"`
    	}
    	if err := c.BindJSON(&requestBody); err != nil {
     	   c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
     	   return
    	}
    	c.JSON(http.StatusOK, gin.H{
     	   "message": "Login successful",
    	})
})
  
	r.Run()
}
