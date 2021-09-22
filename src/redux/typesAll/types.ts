export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: photosProfileType
}

export type ProfileType = {
    userId: number,
    lookingForAJob: string,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
    photos: photosProfileType
}

export type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}

export type photosProfileType = {
    small: string,
    large: string
}
