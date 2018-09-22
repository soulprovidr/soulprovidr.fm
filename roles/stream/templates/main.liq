set("init.daemon.pidfile.path", "{{ stream.liquidsoap.paths.pid }}")
set("log.file.path", "{{ stream.liquidsoap.paths.log }}")

# "{{ storage.path }}" is the location of the S3 folder mount.
source = mksafe( playlist( "{{ storage.path }}", conservative = true, reload_mode = "watch" ) )
source = amplify(1.,override="replay_gain", source)
source = crossfade(source)

def apply_metadata(m)
  artist = m["artist"]
  title = m["title"]
  run_process("{{ stream.notify }} #{json_of(m)}")
end

source = on_metadata(apply_metadata, source)

# This is configuration for the Icecast mount.
# The password corresponds to the source password set in icecast.xml.
output.icecast(
  %mp3.vbr,
  port = {{ stream.icecast.port }},
  password = "{{ passwords.source }}",
  mount = "{{ stream.filename }}",
  description = "Online radio for those who like to groove.",
  genre = "Funk / Soul / Jazz",
  url = "https://soulprovidr.fm",
  source  
)