module.exports = ({ env }) => ({
	email: {
		config: {
			provider: 'strapi-provider-email-resend',
			providerOptions: {
				apiKey: env('RESEND_API_KEY'), // Required
			},
			settings: {
				defaultFrom: env('RESEND_DEFAULT_FROM'),
				defaultReplyTo: env('RESEND_DEFAULT_REPLY_TO'),
			},
		},
	},

	upload: {
    config: {
      provider: "strapi-provider-upload-supabase",
      providerOptions: {
        apiUrl: env("SUPABASE_API_URL"),
        apiKey: env("SUPABASE_API_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env("SUPABASE_DIRECTORY"),
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
