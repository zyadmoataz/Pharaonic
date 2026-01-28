import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blog_content } from "@/data/blog-content";
import BlogPostClient from "./BlogPostClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blog_content[slug];

    if (!post) {
        return {
            title: "Protocol Not Found - NileVista",
        };
    }

    return {
        title: `${post.title} | NileVista Strategic Intelligence`,
        description: post.metaDescription,
        keywords: post.keywords.join(", "),
        openGraph: {
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.metaDescription,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blog_content[slug];

    if (!post) {
        notFound();
    }

    return <BlogPostClient post={post} />;
}

export async function generateStaticParams() {
    return Object.keys(blog_content).map((slug) => ({
        slug: slug,
    }));
}
