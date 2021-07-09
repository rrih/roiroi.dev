/**
 * 所属のリンクを取得
 *
 * @param company string
 * @return JSX.Element | null
 */
export const getLinksByCompany = (company: string): JSX.Element | null => {
    if (company == null) {
        return null
    }
    const onlyName: string = company ? company.split('@')[1] : ''
    return  <a href={`https://github.com/${onlyName}`}>{company}</a>
}

/**
 * GitHub の Twitter screen name からリンクを取得
 *
 * @param twitter_username string
 * @return JSX.Element | null
 */
export const getLinkByTwitterId = (twitter_username: string): JSX.Element | null => {
    if (twitter_username == null) {
        return null
    }
    return <a href={`https://twitter.com/${twitter_username}`}>@{twitter_username}</a>
}

/**
 * bio の中に screen name がある場合、link の dom に差し替える
 *
 * @param bio string
 * @param html_url string
 * @return JSX.Element | string | null
 */
export const getBio = (bio: string, html_url: string): JSX.Element | string | null => {
    if (bio == null) {
        return null
    }
    if (bio.indexOf('@rrih') != -1) {
        const first = bio.split('@rrih')[0]
        const second = bio.split('@rrih')[1]
        const dom: JSX.Element = <>{first}<a href={html_url}>@rrih</a>{second}</>
        return dom
    }
    return bio
}