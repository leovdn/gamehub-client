import gameCardSliderMockItems from 'components/GameCardSlider/mock'
import highlightMockItem from 'components/Highlight/mock'
import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export function getServerSideProps() {
  return {
    props: {
      games: gameCardSliderMockItems,
      recommendedGames: gameCardSliderMockItems,
      recommendedHighlight: highlightMockItem
    }
  }
}
