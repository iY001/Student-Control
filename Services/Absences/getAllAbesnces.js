import { format } from "date-fns";
export default async function getAllAbesnces() {

    

    let absences = await Prisma.absences
        .findMany({
            include: { class: { include: { Students: true } } },
        })
        .catch((error) => console.log(error));

    absences.Date = format(absences.Date, "yyyy-MM-dd");
    
    return absences
}   