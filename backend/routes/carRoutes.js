const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
const { verifyToken } = require("../controllers/authController");

// Get all cars
router.get("/", carController.getAllCars);

// Get cars by filters
router.get("/filter", carController.getFilteredCars);

// Create a new car
router.post("/", carController.createCar);

// Book a car
router.post("/:carId/book", verifyToken, carController.bookCar);

// Cancel a booking
router.post("/:carId/cancel", verifyToken, carController.cancelBooking);

// Update car availability
router.patch("/:carId/availability", carController.updateCarAvailability);

// Delete a car
router.delete("/:carId", carController.deleteCar);

// Add multiple cars (for testing/initial setup)
router.post("/bulk", carController.addMultipleCars);

// Get reserved cars
router.get("/reserved", verifyToken, carController.getReservedCars);

// Get rented cars
router.get("/rented", verifyToken, carController.getRentedCars);

// Get favorite cars
router.get("/favorites", carController.getFavoriteCars);

// Get car by ID
router.get("/:id", carController.getCarById);

module.exports = router;
