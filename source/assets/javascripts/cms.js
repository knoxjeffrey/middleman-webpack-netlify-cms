import CMS from 'netlify-cms-app';
// import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

// CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerEventListener({
  name: 'prePublish',
  handler: ({ author, entry }) => console.log(JSON.stringify({ author, data: entry.get('data') })),
});

CMS.init();
