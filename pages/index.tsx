import React, { useEffect, useState } from "react"
import axios from "axios";
import { Footer, Header, Img, SectionBody } from "./styles";
import { GithubBio } from "../interface/githubBio";
import { getBio, getGithubProp, getLinkByTwitterId, getLinksByCompany } from "./ghUtil";
import BioIndex from "./bio";

const IndexPage = () => {
    const [data, setData] = useState<GithubBio>();

    useEffect(() => {
        axios.get('https://api.github.com/users/rrih')
            .then((e) => {
                const resData: GithubBio = e.data
                setData(resData)
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                // console.log(data)
            })
    }, [])

    return <>
        <Header>
            <div>roiroi.dev</div>
        </Header>
        <SectionBody>
            {data != null ? <BioIndex data={data} /> : null}
        </SectionBody>
        <Footer>&copy; {new Date().getFullYear()} kawahara</Footer>
    </>
}

export default IndexPage