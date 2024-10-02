import { useNavigate, useParams } from "react-router-dom";
import { AddGamesContainer } from "./ManageGamesStyled";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { gameSchema } from "../../schemas/gameSchema";
import { ErrorSpan } from "../../components/Navbar/NavbarStyled";
import { getGameById, registerNewGame } from "../../services/gamesServices";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useEffect } from "react";

const ManageGames = () => {
    const { action, gameId } = useParams();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(gameSchema)
    });

    async function registerGameSubmit(data) {
        try {
            await registerNewGame(data);
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    async function editGameSubmit(data) {
        //     try {
        //         await editGame(data);
        //         navigate("/profile");
        //     } catch (error) {
        //         console.log(error);
        //     }
    };

    async function findGameById(gameId) {
        try {
            const { data } = await getGameById(gameId);
            setValue("title", data.title);
            setValue("cover", data.cover);
            setValue("description", data.description);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (action === "update") {
            findGameById(gameId)
        }
    }, []);

    return (
        <AddGamesContainer>
            <h2>{action == "add" ? "Cadastrar" : "Atualizar"} Game</h2>
            <form onSubmit={
                action == "add" ? handleSubmit(registerGameSubmit) : handleSubmit(editGameSubmit)
            }>
                <label htmlFor="title">Titulo</label>
                <Input type="text" placeholder="Digite o titulo do game"
                    name="title" id="title"
                    register={register} />
                {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}

                <label htmlFor="cover">Capa</label>
                <Input type="text" placeholder="Informe o link da imagem da capa"
                    name="cover" id="cover"
                    register={register} />
                {errors.cover && <ErrorSpan>{errors.cover.message}</ErrorSpan>}

                <label htmlFor="description">Descrição</label>
                <Input type="text" placeholder="Informe a descrição desse game"
                    name="description" id="description" isInput={false}
                    register={register} />
                {errors.description && <ErrorSpan>{errors.description.message}</ErrorSpan>}

                <Button type="submit" text={action === "add" ? "Cadastrar" : "Atualizar"} />
            </form>
        </AddGamesContainer >
    );
};

export default ManageGames;
