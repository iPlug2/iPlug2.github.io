/* Declares the IPlugInstrument Audio Worklet Processor */

class IPlugInstrument_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugInstrument;
    super(options);
  }
}

registerProcessor("IPlugInstrument", IPlugInstrument_AWP);
