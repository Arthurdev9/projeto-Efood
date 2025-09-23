import { BeatLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

const Loader = () => {
  return (
    <div>
      <Container>
        <BeatLoader color={colors.red} />
      </Container>
    </div>
  )
}

export default Loader
