import { useState } from 'react'
import { FlatList } from 'react-native'

import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ButtonIcon } from '@components/ButtonIcon'
import { Input } from '@components/Input'
import { Filter } from '@components/Filter'
import { PlayerCard } from '@components/PlayerCard'

import { Container, Form, HeaderList, NumberOfPlayer } from './styles'

export function Players() { 
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Rodrigo', 'Paulo', 'Carlos', 'Eminem']);

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
            />

        </Container>
    )
}