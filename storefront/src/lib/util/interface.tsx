export interface Post {
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  image: any
  body: any
  tags: Array<Tag>
  _id: string
}

export interface Galerie {
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt: string
  link: string
  categorie: string
  body: any
  miniature: any
  miniature2: any
  miniature3: any
  image1: any
  image2: any
  image3: any
  image4: any
  image5: any
  image6: any
  image7: any
  image8: any
  image9: any
  image10: any
  tags: Array<Tag>
  _id: string
}

export interface Tag {
  name: string
  slug: { current: string }
  _id: string
  postCount?: number
}
