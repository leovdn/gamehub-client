import Game, { GameTemplateProps } from 'templates/Game'

export default function Index(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  return {
    props: {
      cover:
        'https://images.gog-statics.com/262d408c0d0a5edc2bf69ca026e00261c574ac250d5c3cb19d4c21beee420e54.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: 'R$ 230,00',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloremque possimus minima.'
      }
    }
  }
}
