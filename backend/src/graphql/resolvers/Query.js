import Equipos from "../../models/Equipos";


const Query = {
    equipos: async () => {
        return await Equipos.find()
    },
    equiposTitle: async (_, {title}) => {
        return await Equipos.find({"title": title})
    },
    equiposId: async (_, {_id}) => {
        return await Equipos.find({"_id": _id})
    }
}

export default Query;