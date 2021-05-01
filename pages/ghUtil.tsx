import { GithubBio } from "../interface/githubBio";

/**
 * nullable ではない場合、data から指定したプロパティを取り出す。
 *
 * TODO 以下のエラーを直す
 * Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'GithubBio'.
 * No index signature with a parameter of type 'string' was found on type 'GithubBio'.ts(7053)
 *
 * @param propName string
 * @return string
 */
export const getGithubProp = (propName: string, data: GithubBio | undefined): string | null => {
    if (data == null) {
        return null
    }
    if (propName == null) {
        return null
    }
    return data ? data[propName] : '';
}

/**
 * 所属のリンクを取得
 *
 * @param void
 * @return JSX.Element
 */
export const getLinksByCompany = (data: GithubBio | undefined): JSX.Element | null => {
    if (data == null) {
        return null
    }
    if (data['company'] == null) {
        return null
    }
    const onlyName: string = data ? data['company'].split('@')[1] : ''
    return  <a href={`https://github.com/${onlyName}`}>{getGithubProp('company', data)}</a>
}

/**
 * GitHub の Twitter screen name からリンクを取得
 */
export const getLinkByTwitterId = (data: GithubBio | undefined): JSX.Element | null => {
    if (data == null) {
        return null
    }
    if (data['twitter_username'] == null) {
        return null
    }
    const twitterUsername = data ? data['twitter_username'] : ''
    return <a href={`https://twitter.com/${twitterUsername}`}>@{twitterUsername}</a>
}

/**
 * bio の中に screen name がある場合、link の dom に差し替える
 *
 * @param void
 * @return JSX.Element | string | null
 */
export const getBio = (data: GithubBio | undefined): JSX.Element | string | null => {
    if (data == null) {
        return null
    }
    if (data.bio == null) {
        return null
    }
    const bio: string = data.bio
    if (bio.indexOf('@rrih') != -1) {
        const first = bio.split('@rrih')[0]
        const second = bio.split('@rrih')[1]
        const dom: JSX.Element = <>{first}<a href={getGithubProp('html_url', data)}>@rrih</a>{second}</>
        return dom
    }
    return bio
}