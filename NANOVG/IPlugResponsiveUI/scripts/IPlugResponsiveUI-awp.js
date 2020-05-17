/* Declares the IPlugResponsiveUI Audio Worklet Processor */

class IPlugResponsiveUI_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlugResponsiveUI;
    super(options);
  }
}

registerProcessor("IPlugResponsiveUI", IPlugResponsiveUI_AWP);
