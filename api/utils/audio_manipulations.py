import numpy as np
import moviepy.editor as mp
import tensorflow as tf
from scipy.io.wavfile import write

from api.utils.LoadNoiseSupressorModel import *


def desnoise(vid_filename):
    uploaded_vid = mp.VideoFileClip(vid_filename)
    f = r'api/assets/runtime/extarctedaudio.wav'
    uploaded_vid.audio.write_audiofile(f, fps=48000)

    original_audio = tf.audio.decode_wav(tf.io.read_file('api/assets/runtime/extarctedaudio.wav'), desired_channels=1)
    original_audio = tf.expand_dims(original_audio.audio, 0)

    model = LoadNoiseSuppressorModel.getInstance()
    noise_suppressed_audio = model.predict(original_audio)

    copy_of_uploaded_video = uploaded_vid
    copy_of_uploaded_video = copy_of_uploaded_video.without_audio()

    data = tf.squeeze(noise_suppressed_audio, 0).numpy()  # 44100 random samples between -1 and 1
    scaled = np.int16(data / np.max(np.abs(data)) * 32767)
    write('api/assets/runtime/processeaudio.wav', 48000, scaled)

    fina_clip = mp.AudioFileClip(r'api/assets/runtime/processeaudio.wav')

    copy_of_uploaded_video = copy_of_uploaded_video.set_audio(fina_clip)
    copy_of_uploaded_video.write_videofile(r'api/assets/runtime/processedvid.mp4')
