import Equipos from "../../models/Equipos";


const Query = {
    equipos: async () => {
        return await Equipos.find()
    }
}

export default Query;