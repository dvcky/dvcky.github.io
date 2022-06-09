# --CUSTOM ALIASES--

# mount and unmount phone over FUSE filesystem (requires android-file-transfer)
alias mphone='killall kiod5 && aft-mtp-mount ~/Phone'
alias uphone='fusermount -u ~/Phone'

# overclock toggles, specifically tweaked for my card (RTX 2060)
alias oc='sudo nvidia-smi -pm 1 && sudo nvidia-smi -pl 200 && nvidia-settings -a [gpu:0]/GPUPowerMizerMode=1 && nvidia-settings -a [gpu:0]/GPUGraphicsClockOffsetAllPerformanceLevels=100 && nvidia-settings -a [gpu:0]/GPUMemoryTransferRateOffsetAllPerformanceLevels=2200'
alias nc='sudo nvidia-smi -pm 0 && sudo nvidia-smi -pl 170 && nvidia-settings -a [gpu:0]/GPUPowerMizerMode=2 && nvidia-settings -a [gpu:0]/GPUGraphicsClockOffsetAllPerformanceLevels=0 && nvidia-settings -a [gpu:0]/GPUMemoryTransferRateOffsetAllPerformanceLevels=0'

# mine ETH on NiceHash network (requires trex-bin)
alias mine='t-rex -a ethash -o stratum+tcp://daggerhashimoto.usa-east.nicehash.com:3353 -u 3AC3FEXvNCgrDUPUBCjsKDmQaWrPiE9Npn.worker'

# start torrenting services (requires flood from npm & qbittorrent-nox)
alias floodon='sudo systemctl start qbittorrent && sudo systemctl start flood@$USER && echo Torrent services started!'
alias floodoff='sudo systemctl stop flood@$USER && sudo systemctl stop qbittorrent && echo Torrent services stopped!'

# fix for league anti-cheat (requires league obviously)
alias fixlol="pkexec sh -c \'sysctl -w abi.vsyscall32=0\'"

# runs RiseupVPN without the buggy interface
alias vpn='riseup-vpn -n --start-vpn on'

# --CUSTOM FUNCTIONS--

# compress <content> <compressed file>
function compress() {
	7z a "$2" -m0=lzma2 -mx9 "$1"
}

# extract <file> <exracted content>
function extract() {
	7z x "$1" -o"$2"
}

# uses GPU accelerated encoding and shrinks video to a visually lossless level
function h265() {
	ffmpeg -i "$1" -c:v hevc_nvenc -rc constqp -qp 22 -c:a aac -b:a 128k out.mp4
}
