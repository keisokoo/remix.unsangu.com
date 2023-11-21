import { gql } from '@apollo/client'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import createApolloClient from '../lib/createApolloClient'
import { Post, Query } from 'resolvers-types'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const client = createApolloClient()
  const res = await client.query<Query>({
    query: gql`
      query {
        post(id: ${params.postId}) {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    `,
  })
  const id = Number(params.postId)
  const post = res?.data?.post?.data?.attributes as Post
  return json({ id, post })
}
export default function PostPage() {
  const { id, post } = useLoaderData<typeof loader>()
  return <div className="text-slate-400">{post?.title}</div>
}
