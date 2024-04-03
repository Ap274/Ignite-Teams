import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'

import { Container, Form, HeaderList, NumberOfPlayer } from './styles'

export function Players() { 
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Rodrigo', 'Paulo', 'Carlos', 'Biro', 'Ana', 'Mike', 'André', 'Marcos', 'Lukita']);

    return(
        <Container>
            <Header showBackButton />
            <Highlight 
                title='Nome da Turma'
                subtitle='adicione a galera e separe os times'
            />

            <Form>
                <Input 
                    placeholder='Nome da pessoa'
                    autoCorrect={false}
                />
                <ButtonIcon icon="add"/>
            </Form>

            <HeaderList>
                <FlatList 
                    data={['Time A', 'Time B', 'Time C']}
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <Filter 
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayer>
                    {players.length}
                </NumberOfPlayer>
            </HeaderList>

            <FlatList 
                data={players}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                    />
                )}
                ListEmptyComponent={() => <ListEmpty message="Não há jogadores nesse time"/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && { flex: 1 }]}
            />

            <Button 
                title="Remover turma"
                type='SECONDARY'
            />

        </Container>
    )
}