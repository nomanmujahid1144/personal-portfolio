interface TestimonialAttributes {
    username: string;
    position: string;
    company: string;
    content: string;
    image: string;
  }
  
export const testimonials: TestimonialAttributes[] = [
    {
      username: 'Ben Parker',
      position: 'CEO',
      company: 'Foodtesla',
      image:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
      content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
        rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
        risus at semper`
    },
    {
      username: 'Jena Karlis',
      position: 'GM',
      company: 'Olpers',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
      content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
        rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.`
    }
  ];

// export const testimonials = [
//     {
//       username: 'Ben Parker',
//       position: 'CEO',
//       company: 'Foodtesla',
//       image:
//         'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80',
//       content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
//         rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
//         risus at semper`
//     },
//     {
//       username: 'Jena Karlis',
//       position: 'GM',
//       company: 'Olpers',
//       image:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
//       content: `Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
//         rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et.`
//     }
//   ];