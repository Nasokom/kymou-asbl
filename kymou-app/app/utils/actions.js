'use server'

import { client } from "./sanity/sanity"
import { unstable_noStore as noStore } from 'next/cache';

export async function getIntro(){
    noStore()
    const datas = await client.fetch(`*[_type == "intro"][0]`)
    return datas
}

export async function getAbout(){
    noStore()
    const datas = await client.fetch(`*[_type == "about"][0]`)
    return datas
}

export async function getProject(){
    noStore()
    const datas = await client.fetch(`*[_type == "project"][0]`)
    return datas
}
