import { PrismaClient } from "@prisma/client";
import { format } from "date-fns";

const Prisma = new PrismaClient();
export default async function getStudents() {
    let absences = await Prisma.absences
        .findMany({
            include: { class: { include: { Students: true } } },
        })
        .catch((error) => console.log(error));

    absences.forEach((absence) => {
        console.log(absence.Date);
        absence.Date = format(absence.Date, "yyyy-MM-dd");
        console.log(absence.Date);
    }
    );

    return absences;
}
