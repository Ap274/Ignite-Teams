import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
    const navigation = useNavigation();

    function handleNew() { 
        navigation.navigate('players', { group: 'Rocket'});
    }

    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon />
                <Highlight 
                    title="Nova Turma"
                    subtitle="crie uma turma para adicionar pessoas"
                />

                <Input 
                    placeholder="Nome da turma"
                />

                <Button 
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}