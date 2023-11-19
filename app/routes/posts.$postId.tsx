import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return json({ params })
}
export default function PostPage() {
  const { params } = useLoaderData<typeof loader>()
  return <div className="text-slate-400">{params.postId}</div>
}
