import { useParams , useSearchParams} from "react-router-dom"

const Post = () => {
    const { category, laptop } = useParams()
  return (
    <>
    <h2>Post Page: {category} </h2>

    </>
  )
}

export default Post