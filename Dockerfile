FROM ubuntu:latest
FROM ocaml/opam:latest

# Install Icecast.
RUN apt update
RUN apt install -y icecast2

# Install liquidsoap.
ENV PACKAGES "taglib mad lame cry samplerate liquidsoap"
RUN opam depext $PACKAGES && \
    opam install $PACKAGES
RUN apt clean && \
    rm -rf /var/lib/apt/li

RUN opam init -y && opam install taglib mad lame cry samplerate liquidsoap

# Install redis.
RUN apt install -y redis-server