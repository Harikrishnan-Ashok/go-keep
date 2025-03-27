package main

import "github.com/gin-gonic/gin"

func main() {
  router := gin.Default()

  router.GET("/", func(c *gin.Context) {
    c.JSON(200, gin.H{
      "message": "connection kitti",
    })
  })


router.Use(func(c *gin.Context) {
    c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
    c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    if c.Request.Method == "OPTIONS" {
        c.AbortWithStatus(http.StatusNoContent)
        return
    }
    c.Next()
})  
  router.Run()
}
