/* Declares the IPlugEffect Audio Worklet Processor */

class IPlugEffect_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugEffect;
    super(options);
  }
}

registerProcessor("IPlugEffect", IPlugEffect_AWP);
