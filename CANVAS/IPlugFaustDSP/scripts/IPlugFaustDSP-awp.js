class IPlugFaustDSP_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugFaustDSP;
    super(options);
  }
}

registerProcessor("IPlugFaustDSP", IPlugFaustDSP_AWP);
