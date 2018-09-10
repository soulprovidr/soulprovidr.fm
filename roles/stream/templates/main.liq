enable_replaygain_metadata()

set("init.daemon.pidfile.path", "{{ home_path }}/{{ pid_file }}")
set("log.file.path", "{{ home_path }}/{{ log_file }}")

# "{{ home_path }}/{{ media_folder }}" is the location of the S3 folder mount.
source = mksafe( playlist( "{{ home_path }}/{{ media_folder }}", conservative = true, reload_mode = "watch" ) )

source = crossfade(source)

# This is configuration for the Icecast mount.
# The password corresponds to the source password set in icecast.xml.
output.icecast(
  %mp3.cbr(bitrate=192),
  port = {{ icecast_port }},
  password = "{{ source_password }}",
  mount = "{{ stream_name }}",
  description = "Online radio for those who like to groove.",
  genre = "Funk / Soul / Jazz",
  url = "https://soulprovidr.fm",
  source
)