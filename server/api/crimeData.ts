import express, { Request, Response, Router } from "express";
import { getCrimeData, getCrimeDataByState, getCrimeDataById } from "../controllers/index";
const router: Router = express.Router();

router.get("/crimeData", async (req: Request, res: Response) => {
    const stateName = typeof req.query.state === 'string' ? req.query.state : null;
    if (stateName) {
        const crimeDataByState = await getCrimeDataByState(stateName)
        if (!crimeDataByState) {
            res.status(404).json({ error: "No data found for the specified state" });
            return;
        }
        res.json(crimeDataByState);
    } else {
        const crimeData = await getCrimeData();
        if (!crimeData) {
            res.status(404).json({ error: "No data found" });
            return;
        }
        res.json(crimeData);
    }
});


router.get("/crimeData/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const crimeDataById = await getCrimeDataById(id)
    res.json(crimeDataById);
})

export default router;
