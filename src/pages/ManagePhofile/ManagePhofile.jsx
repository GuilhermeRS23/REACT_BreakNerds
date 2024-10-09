import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { ProfileEditContainer } from "./ManagePhofileStyled";
import { findUserById } from "../../services/userServices";
import { useEffect } from "react";
import { userSchema } from "../../schemas/userSchema";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const ManagePhofile = () => {
    const { userId } = useParams();
    //const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(userSchema)
    });

    async function userById(userId) {
        try {
            const { data } = await findUserById(userId);
            setValue("name", data.name);
            setValue("avatar", data.avatar);
            setValue("background", data.background);
        } catch (error) {
            console.log(error)
        }
    };

    async function editPhofileSubmit() {
        console.log(" Foi")
    };

    useEffect(() => {
        userById(userId)
    }, []);

    return (
        <ProfileEditContainer>
            <h2> Editar Perfil</h2>
            <form onSubmit={handleSubmit(editPhofileSubmit)}>

                <label htmlFor="name">Nome</label>
                <Input type="text" placeholder="Digite seu nome..."
                    name="name" id="name"
                    register={register} />
                {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}

                <label htmlFor="avatar">Foto de Perfil</label>
                <Input type="link" placeholder="Informe link para foto de perfil..."
                    name="avatar" id="avatar"
                    register={register} />
                {errors.avatar && <ErrorSpan>{errors.avatar.message}</ErrorSpan>}

                <label htmlFor="background">Background</label>
                <Input type="link" placeholder="Informe link para background do perfil..."
                    name="background" id="background"
                    register={register} />
                {errors.background && <ErrorSpan>{errors.background.message}</ErrorSpan>}

                <Button type="submit" text="Atualizar" />
            </form>
        </ProfileEditContainer>
    )
};

export default ManagePhofile;
