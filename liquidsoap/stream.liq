source = mksafe( playlist( "/home/soulprovidr/Music/staging" ) )
source = smart_crossfade( normalize( source ) )

def log_track(m) = 
  ignore(
    http.post(
      data=json_of( m ),
      headers=[("Content-Type", "application/json")],
      "http://localhost:3333/tracks"
    )
  )
end

source = on_metadata( log_track, source )

out( source )