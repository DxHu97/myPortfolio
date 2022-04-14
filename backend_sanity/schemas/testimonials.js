export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'Imageurl',
            type: 'image',
            options: {
                hotspot: true, //Allows users to crop while uploading picture
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },

    ],
}