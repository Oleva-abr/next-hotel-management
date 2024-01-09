import { defineField } from "sanity"

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField({
            name: "isAdmin",
            title: "isAdmin",
            type: "boolean",
            description: "Check if user is admin",
            initialValue: false,
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden:true,
        }),
        defineField({
            name: "name",
            title: "name",
            type: "string",
            description: "Name of the user",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "url",

        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email"

        }),
        defineField({
            name: "emailVerified",
            type: "datetime",
            hidden: true

        }),
        defineField({
            name: "about",
            title: "About",
            type: "text",
            description: "A brioef description about user"

        })
    ],
}
export default user