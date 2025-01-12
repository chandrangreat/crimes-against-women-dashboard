import prisma from "../prisma/client"

export const getCrimeData = async () => {
    return await prisma.crimes_on_women.findMany({
        distinct: ['state'],
        select: {
            state: true
        }
    });
};

export const getCrimeDataByState = async (stateName: string | null) => {
    return await prisma.crimes_on_women.findMany({
        where: {
            state: stateName
        }
    })
}

export const getCrimeDataById = async (id: string) => {
    return await prisma.crimes_on_women.findFirst({
        where: {
            id: +id
        }
    })
}
