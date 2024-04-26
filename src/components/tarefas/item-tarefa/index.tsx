import { Box, Button, Grid } from "@chakra-ui/react"

function ItemTarefa(){
    return (
        <Grid templateColumns='3fr 1fr' p={5} bg>
            <Box>
                Tarefa 1
            </Box>
            <Box>
                <Button colorScheme='green'>Concluir</Button>
                <Button colorScheme="red">Remover</Button>
            </Box>
        </Grid>
    )
}

export default ItemTarefa