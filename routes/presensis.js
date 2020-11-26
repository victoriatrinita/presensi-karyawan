const { Router } = require("express");
const Presensi = require("../models/Presensi");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const presensis = await Presensi.find();
    if (!presensis) {
      throw new Error("No presensis");
    }
    res.status(200).json(presensis);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const { name, niu, time } = req.body;
  const newPresensi = new Presensi({ name, niu, time });
  try {
    const presensi = await newPresensi.save();
    if (!presensi) {
      throw new Error("There was an error saving the presensi");
    }
    res.status(200).json(presensi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const presensi = Presensi.findById(id);
    if (!presensi) {
      throw new Error("No presensi was found");
    }
    const removed = await presensi.remove();
    if (!removed) {
      throw new Error("There was a problem deleting the presensi");
    }
    res.status(200).json({ id });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
