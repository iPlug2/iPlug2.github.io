class IPlugMidiEffect_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugMidiEffect;
    super(options);
  }
}

registerProcessor("IPlugMidiEffect", IPlugMidiEffect_AWP);
