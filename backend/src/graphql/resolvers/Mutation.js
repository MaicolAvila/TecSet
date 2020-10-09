import Equipos from "../../models/Equipos";


const Mutation = {
    createEquipo: async (_, {title, content, image, value}) => {
        const newEquipo = new Equipos({title, content, image, value});
        return await newEquipo.save();
    }
}

export default Mutation;